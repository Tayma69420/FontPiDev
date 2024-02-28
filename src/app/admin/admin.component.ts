import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  users: any[] = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.userService.getAllUsersInfo().subscribe(
      (data: any[]) => {
        // Add a property to each user object to control visibility
        this.users = data.map(user => ({ ...user, isEditing: false }));
      },
      error => {
        console.log('Error fetching users:', error);
      }
    );
  }

  toggleEdit(user: any): void {
    user.isEditing = !user.isEditing;
  }

  saveChanges(user: any): void {
    this.userService.modifyUserDetails(user.id, user).subscribe(
      () => {
        console.log('User details updated successfully');
        user.isEditing = false;
      },
      error => {
        console.error('Error updating user details:', error);
      }
    );
  }
  deleteUser(userId: number): void {
    // Call the deleteUser API endpoint
    this.userService.deleteUser(userId).subscribe(
      () => {
        console.log('User deleted successfully');
        this.loadUsers();
      },
      error => {
        console.error('Error deleting user:', error);
      }
    );
  }
}
