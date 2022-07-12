<?php
$xpdo_meta_map['flats_packageGroup']= array (
  'package' => 'flats_package',
  'version' => '1.1',
  'table' => 'flats_package_groups',
  'extends' => 'xPDOSimpleObject',
  'tableMeta' => 
  array (
    'engine' => 'InnoDB',
  ),
  'fields' => 
  array (
    'area' => NULL,
    'type' => NULL,
    'rooms' => NULL,
    'level' => NULL,
    'block' => NULL,
    'price' => NULL,
    'status' => NULL,
    'img' => NULL,
    'file' => NULL,
    'socle' => NULL,
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
    'type' => 
    array (
      'dbtype' => 'tinyint',
      'precision' => '1',
      'phptype' => 'integer',
      'null' => false,
    ),
    'rooms' => 
    array (
      'dbtype' => 'tinyint',
      'precision' => '1',
      'phptype' => 'integer',
      'null' => false,
    ),
    'level' => 
    array (
      'dbtype' => 'tinyint',
      'precision' => '1',
      'phptype' => 'integer',
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
    'socle' => 
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
      'class' => 'flats_packageItem',
      'local' => 'id',
      'foreign' => 'group_id',
      'cardinality' => 'many',
      'owner' => 'local',
    ),
  ),
);
