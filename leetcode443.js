var compress = function(chars) {    
    let count = 1
    let result = ""    
      for (let i = 0; i < chars.length; i++) {        
        let cur = chars[i];
        let next = chars[i + 1];        
          if (cur === next) {
            count ++
        } else {
            result += chars[i] + count
            count = 1
        }
    }
    return result.split("")
};