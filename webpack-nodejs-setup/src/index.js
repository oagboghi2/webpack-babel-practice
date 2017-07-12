import _ from 'lodash';

const component = ()=>{
  var element = document.createElement('div');

  //Lodash, currently included via a script, is required for this line of Working
  element.innerHTML = _.join(['Hello', 'webpack' ,'via', 'bundle2'], ' ');

  return element;
}

document.body.appendChild(component());
