import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent {

  // Adding @Input make it an attribute to be part of the component
  @Input()
  title = "Number 10";

  @Input()
  imageUrl = "/assets/10.jpg";
}
