import {CanActivate, Router} from "@angular/router";
import {AuthService} from "../../modules/auth/auth.service";
import {Injectable} from "@angular/core";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {

  }


  canActivate(){
    if(!this.authService.user.id) {
      this.router.navigate(['/auth/sign-in'])
      return false;
    }
    return true;
  }

}
