var closeStrings = function(word1, word2) {
  
    function makeObj(word){
      const obj = {};
      
      for (let i = 0; i < word.length; i++){
        if (obj[word[i]]) obj[word[i]]++
        else obj[word[i]] = 1;
      }
      return obj;
      
    }
    
    const firstObj = makeObj(word1);
    const secObj = makeObj(word2);
    const secObjFreqs = {};
    
    const secObjVals = Object.values(secObj);
  
    
    for (let i = 0; i < secObjVals.length; i++){
      if (secObjFreqs[secObjVals[i]]) secObjFreqs[secObjVals[i]]++;
      else secObjFreqs[secObjVals[i]] = 1;
    }
  
    const firstObjEnts = Object.entries(firstObj)
    
    console.log(firstObj, secObj, secObjFreqs)
    for (let i = 0; i < firstObjEnts.length; i++){
  
      if (secObj[firstObjEnts[i][0]] !== undefined && secObjFreqs[firstObjEnts[i][1]]!== undefined){
        secObjFreqs[firstObjEnts[i][1]]--;
      }
      else return false;
    }
    
    const newSecObjFreqs = Object.values(secObjFreqs);
    
    for (let i = 0; i < newSecObjFreqs.length; i++){
      if (newSecObjFreqs[i] !== 0) return false
    }
    
    return true;
    
  };
  
  console.log(closeStrings("abbzzca", "babzzcz"))