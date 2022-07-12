var exportExcelPanel = function (config) {
	config = config || {};
	Ext.apply(config, {
		cls: "container",
		header: true
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