import {Component, Input} from '@angular/core';
import {User} from "../users";

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  imports: [],
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({required: true}) avatar!: string;
  @Input() name!: string;

  get imagePath(){
    return 'assets/users/' + this.avatar;
  }

  onSelectUser() {
  }


}
