import { CanDeactivateFn } from '@angular/router';

export const notifyGuard: CanDeactivateFn<unknown> = (component, currentRoute, currentState, nextState) => {
  if(confirm("if you go bakc your progress will not save? Are you willing to to go bakc")){
    return true;
  }
  else{
    return false;
  }
};
