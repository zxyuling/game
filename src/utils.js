export default {
  extend(...obj){
        var i,j,len = obj.length;
        for(i=len-1;i>0;i--){
            var o1 = obj[i],o2 = obj[i-1];
            for(j in o1){
                if(typeof o1[j]==='undefined' || o1[j].constructor!==Object)
                    obj[i-1][j] = obj[i][j];
                else{
                    if(typeof o2[j]==='undefined' || o2[j].constructor!==Object)
                        obj[i-1][j] = {}
                    this.extend(obj[i-1][j],obj[i][j]);
                }
            }
        }
        return obj[0];
    }
}