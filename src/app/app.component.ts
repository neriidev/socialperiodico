import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'socialperiodicos';

  router: Router;
  constructor(router: Router){
    this.router = router;
  }

  onClickHome(){
    console.log("home");
    this.router.navigate([''], { skipLocationChange: true });
  }

  onClickChat(){
    console.log("chat");
    this.router.navigate(['/chat'], { skipLocationChange: true });
  }

  onClickDescobrir(){
    console.log("descobrir");
    this.router.navigate(['/descobrir'], { skipLocationChange: true });
  }

  onClickInsights(){
    console.log("Insights");
    this.router.navigate(['/insights'], { skipLocationChange: true });
  }
}
