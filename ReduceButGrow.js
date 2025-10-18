function grow(x){
  return x.reduce((accu, currentValue) => {
    return accu*currentValue;
  }, 1);
}
