<?php
$file = file_get_contents('data.json');  // Открыть файл data.json
$taskList = json_decode($file,TRUE);        // Декодировать в массив
unset($file);                               // Очистить переменную $file
$taskList[] = array('name'=>$_POST[postVar]);        // Представить новую переменную как элемент массива, в формате 'ключ'=>'имя переменной'
file_put_contents('data.json',json_encode($taskList, JSON_UNESCAPED_UNICODE));  // Перекодировать в формат и записать в файл.
unset($taskList);
?>