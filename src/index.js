module.exports = function check(str, bracketsConfig) {

  let pairs = bracketsConfig.map(arr => arr.join('')); 
//создаем пары вида () из массивов "скобок"
  
  while (pairs.length) {
    let i = 0;

    for (let item of pairs) {
      if (str.indexOf(item) > -1) {
        str = str.replace(item, '');
      } else {i++}
    }

    if (i === pairs.length) pairs.length = 0;  
  }
//если в строке есть любая пара из pairs, то "удаляем" её, заменяя на ''. И так в цикле пока не продём все пары

  return (!str) ? true : false;
//если после всех манипуляций длина строки равна 0, то всё верно, если нет, то ложно
} 
