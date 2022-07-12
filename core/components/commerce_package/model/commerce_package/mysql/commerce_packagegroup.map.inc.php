<?php
$xpdo_meta_map['commerce_packageGroup']= array (
  'package' => 'commerce_package',
  'version' => '1.1',
  'table' => 'commerce_package_groups',
  'extends' => 'xPDOSimpleObject',
  'tableMeta' => 
  array (
    'engine' => 'InnoDB',
  ),
  'fields' => 
  array (
    'area' => NULL,
    'block' => NULL,
    'price' => NULL,
    'status' => NULL,
    'img' => NULL,
    'file' => NULL,
    'group_id' => 0,
  ),
  'fieldMeta' => 
  array (
    'area' => 
    array (
      'dbtype' => 'text',
      'phptype' => 'string',
      'null' => false,
    ),
    'block' => 
    array (
      'dbtype' => 'text',
      'phptype' => 'string',
      'null' => false,
    ),
    'price' => 
    array (
      'dbtype' => 'integer',
      'phptype' => 'integer',
      'null' => false,
    ),
    'status' => 
    array (
      'dbtype' => 'tinyint',
      'precision' => '1',
      'phptype' => 'integer',
      'null' => false,
    ),
    'img' => 
    array (
      'dbtype' => 'text',
      'phptype' => 'string',
      'null' => false,
    ),
    'file' => 
    array (
      'dbtype' => 'text',
      'phptype' => 'string',
      'null' => false,
    ),
    'group_id' => 
    array (
      'dbtype' => 'int',
      'precision' => '10',
      'phptype' => 'integer',
      'null' => false,
      'default' => 0,
      'index' => 'index',
    ),
  ),
  'composites' => 
  array (
    'Item' => 
    array (
      'class' => 'commerce_packageItem',
      'local' => 'id',
      'foreign' => 'group_id',
      'cardinality' => 'many',
      'owner' => 'local',
    ),
  ),
);
