<?php
require_once MODX_CORE_PATH . "model/modx/modmanagercontroller.class.php";

class ExportexcelIndexManagerController extends modExtraManagerController {

	/**
     * Do any page-specific logic and/or processing here
     * @param array $scriptProperties
     * @return void
     */
    public function process(array $scriptProperties = array()) {}

    /**
     * The page title for this controller
     * @return string The string title of the page
     */
    public function getPageTitle() {
        return "Экспорт заявок";
    }

    /**
     * Loads any page-specific CSS/JS for the controller
     * @return void
     */
    public function loadCustomCssJs() {
    	$baseUrl = "/assets/components/exportexcel";
    	$this->addLastJavascript( $baseUrl . "/index.js");
    }

    /**
     * Specify the location of the template file
     * @return string The absolute path to the template file
     */
    public function getTemplateFile() {
    	return '';//return MODX_CORE_PATH .'components/exportexcel/templates/index.tpl';
    }

    /**
     * Check whether the active user has access to view this page
     * @return bool True if the user passes permission checks
     */
    public function checkPermissions() { return true;}

}