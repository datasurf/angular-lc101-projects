import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Exercises: Angular Lesson 3';
  takeOff: boolean = false;

  color = 'green';
  height = 0;
  width = 0;
  message = 'Space shuttle ready for takeoff!';

  handleTakeOff() {
    let result = window.confirm('Are you sure the shuttle is ready for takeoff?');
    if (result) {
       this.color = 'blue';
       this.height = 10000;
       this.width = 0;
       this.message = 'Shuttle in flight.';
       this.takeOff = true;
    }
  }

    moveRocket(rocketImage, direction) {
      if (direction === 'right') {
         let movement = parseInt(rocketImage.style.left) + 10 + 'px';
         rocketImage.style.left = movement;
         this.width = this.width + 10000;   
      } if (direction === 'left') {
        let movement = parseInt(rocketImage.style.left) - 10 + 'px';
        rocketImage.style.left = movement;
        this.width = this.width - 10000;
      } if (direction === 'up') {
        let movement = parseInt(rocketImage.style.bottom) + 10 + 'px';
        rocketImage.style.bottom = movement;
        this.height = this.height + 10000;
      } if (direction === 'down') {
        let movement = parseInt(rocketImage.style.bottom) - 10 + 'px';
        rocketImage.style.bottom = movement;
        this.height = this.height - 10000;
      }if (direction === 'land') {
        rocketImage.style.bottom = '0px';
        this.height = 0;
        this.takeOff = false;
      }if (direction === 'abort') {
        rocketImage.style.bottom = '0px';
        this.height = 0;
        this.takeOff = false;
      }
    }

    edgeCheck(){
      if ((this.height >= 320000||this.height <= 20000) && this.takeOff === true){
        this.color = 'orange';

      }if ((this.width >= 320000||this.width <= 20000) && this.takeOff === true){
        this.color = 'orange';
        
      }else{
        this.color = 'blue';
      }
    }
}
