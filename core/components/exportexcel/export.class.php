<?php

class exportExcelProcessor extends modProcessor {
	public function process() {

		include MODX_CORE_PATH . "config/config.inc.php";
		require_once(MODX_CORE_PATH . "components/PHPExcel.php");
		require_once(MODX_CORE_PATH . "components/PHPExcel/Writer/Excel5.php");
		require_once(MODX_CORE_PATH . "components/PHPExcel/IOFactory.php");

    if (function_exists("date_default_timezone_set")) date_default_timezone_set("Asia/Almaty");

    $database_tabl = "modx_formit_forms";

		define("DB_HOST", "localhost");
  	define("DB_USER", $database_user);
  	define("DB_PASSWORD", $database_password);
  	define("DB_DATABASE", $dbase);

	  $filename = "orders.xls";

		$hasFrom 	= isset($_POST["dateFrom"]) && $_POST["dateFrom"]!="";
		$hasTo 		= isset($_POST["dateTo"]) && $_POST["dateTo"]!="";
		$dateFrom = strtotime($_POST["dateFrom"] ." 00:00:00");
		$dateTo 	= strtotime($_POST["dateTo"] ." 23:23:59");

		$xls = new PHPExcel();

		$xls->setActiveSheetIndex(0);
		$sheet = $xls->getActiveSheet();
		$sheet->setTitle("Заявки");

		$sheet->getColumnDimension("A")->setWidth(20);
		$sheet->getColumnDimension("B")->setWidth(20);
		$sheet->getColumnDimension("C")->setWidth(20);
		$sheet->getColumnDimension("D")->setWidth(20);
		$sheet->getColumnDimension("E")->setWidth(20);
		$sheet->getColumnDimension("F")->setWidth(20);
		$sheet->getColumnDimension("G")->setWidth(20);

		$query=mysqli_connect(DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE);

		mysqli_set_charset($query, "utf8");

		if ($hasFrom || $hasTo) {
			if ($hasFrom && $hasTo) {
				$result = mysqli_query($query,"SELECT * FROM `$database_tabl` WHERE (`date` BETWEEN $dateFrom AND $dateTo)"); 
			} else {
				if ($hasFrom) {
					$result = mysqli_query($query,"SELECT * FROM `$database_tabl` WHERE (`date` >= $dateFrom)"); 
				}
				if ($hasTo) {
					$result = mysqli_query($query,"SELECT * FROM `$database_tabl` WHERE (`date` <= $dateTo)"); 
				}
			}
		} else {
			$result = mysqli_query($query,"SELECT * FROM `$database_tabl`"); 
		}

		$index = 1;

		$sheet->setCellValueExplicit("A" . $index, "Номер заявки", PHPExcel_Cell_DataType::TYPE_STRING);
		$sheet->setCellValueExplicit("B" . $index, "Имя", 	PHPExcel_Cell_DataType::TYPE_STRING);
		$sheet->setCellValueExplicit("C" . $index, "Телефон", PHPExcel_Cell_DataType::TYPE_STRING);
		$sheet->setCellValueExplicit("D" . $index, "Дата отправки", PHPExcel_Cell_DataType::TYPE_STRING);
		$sheet->setCellValueExplicit("E" . $index, "Время отправки", PHPExcel_Cell_DataType::TYPE_STRING);
		$sheet->setCellValueExplicit("F" . $index, "Язык", PHPExcel_Cell_DataType::TYPE_STRING);
		$sheet->setCellValueExplicit("G" . $index, "IP адрес", PHPExcel_Cell_DataType::TYPE_STRING);

		while ($row = mysqli_fetch_array($result, MYSQLI_BOTH)) {
	    $index++;

	    $order_id = $row["id"];
	    $order_date = date("d-m-Y", $row["date"]);
	    $order_time = date("H:i:s", $row["date"]);
	    $order_ip = $row["ip"];

	    if ($row["context_key"]=="web") {
		    $order_lang = "русский";
	    }
	    if ($row["context_key"]=="kz") {
		    $order_lang = "казахский";
	    }

	   	$json = json_decode($row["values"], true);

	    $sheet->setCellValueExplicit("A" . $index, $order_id, PHPExcel_Cell_DataType::TYPE_STRING);
	   
	   	foreach ($json as $key => $key_value) {
        if ($key=="name") {
          $sheet->setCellValueExplicit("B" . $index, $key_value, PHPExcel_Cell_DataType::TYPE_STRING);
        }
        if ($key=="phone") {
          $sheet->setCellValueExplicit("C" . $index, $key_value, PHPExcel_Cell_DataType::TYPE_STRING);
        }
	   	}

	    $sheet->setCellValueExplicit("D" . $index, $order_date, PHPExcel_Cell_DataType::TYPE_STRING);
	    $sheet->setCellValueExplicit("E" . $index, $order_time, PHPExcel_Cell_DataType::TYPE_STRING);
	    $sheet->setCellValueExplicit("F" . $index, $order_lang, PHPExcel_Cell_DataType::TYPE_STRING);
	    $sheet->setCellValueExplicit("G" . $index, $order_ip, PHPExcel_Cell_DataType::TYPE_STRING);
		}

		mysqli_free_result($result);

		$objWriter = new PHPExcel_Writer_Excel5($xls);
		$temp_filename = MODX_ASSETS_PATH . $filename;
		$objWriter->save($temp_filename);

		return $this->success("Выгрузка успешно состоялась", [
			"path" => ".." . MODX_ASSETS_URL . $filename
		]);
	}
}

return "exportExcelProcessor";