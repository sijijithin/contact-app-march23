import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(allcontacts:any,searchKey:string,key:string):any[]{
    const result:any=[]
    if(!allcontacts || searchKey==""  || key==""){
      return allcontacts
    }
    allcontacts.forEach((items:any)=>{
      if(items[key].trim().toLowerCase().includes(searchKey.trim().toLowerCase())){
        result.push(items)
      }
    })
    return result;
  }

}
