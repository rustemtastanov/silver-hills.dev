var exportExcelPanel = function (config) {
	config = config || {};
	Ext.apply(config, {
		url: "/assets/components/exportexcel/connector.php",
		baseParams: {
			action: "export"
		},
		cls: "container",
		collapsible: true,
		header: true,
		headerCssClass: "modx-page-header",
		headerCfg: {
			tag: "h2"
		},
		title: "Экспорт заявок в Excel",
		buttonAlign: "left",
		items: [{
			layout: "form",
			cls: "main-wrapper",
			items: [{
				title: "с",
				items: [{
					xtype: "datefield",
					fieldLabel: "с",
					name: "dateFrom",
					format: "Y/m/d"
				}]
			}, {
				title: "по",
				items: [{
					xtype: "datefield",
					fieldLabel: "по",
					name: "dateTo",
					format: "Y/m/d"
				}]
			}]
		}],
		buttons: [{
			text: "Выгрузить заявки",
			cls: "primary-button",
			scope: this,
			handler: function() {
				this.getForm().submit({
					success: function(form, action) {
						var link = document.createElement("a");
						link["href"] = action["result"]["object"]["path"];
						link["download"] = "orders.xls";
						link.dispatchEvent(new MouseEvent("click"));
					}
				});
			}
		}]
	});
	exportExcelPanel.superclass.constructor.call(this, config);
};
Ext.extend(exportExcelPanel, MODx.FormPanel);
Ext.reg("export-excel-panel", exportExcelPanel);

Ext.onReady(function() {
	MODx.add({
		xtype: "export-excel-panel"
	});
});