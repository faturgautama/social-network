import { Component, OnInit } from '@angular/core';

export interface IActivity {
    id: number;
    author: string;
    activity: string;
    content: string;
    time: string;
    is_selected: boolean;
}

@Component({
    selector: 'app-activity',
    templateUrl: './activity.component.html',
    styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {

    Activity: IActivity[];

    constructor() {
        this.Activity = [
            {
                id: 1,
                author: "John Stainor",
                activity: 'commented',
                content: 'Well, iam liking it how it captures the audition?',
                time: "2 seconds ago",
                is_selected: false,
            },
            {
                id: 2,
                author: "John Stainor",
                activity: 'added a new photo',
                content: 'Creative people must follow this guidelines of programming',
                time: "5 minutes ago",
                is_selected: false,
            },
            {
                id: 3,
                author: "John Stainor",
                activity: 'shared a document',
                content: 'How to become an expert',
                time: "1 day ago",
                is_selected: false,
            },
        ]
    }

    ngOnInit(): void {
    }

    handleSelectedActivity(id: number): void {
        this.Activity.forEach((item) => {
            if (id == item.id) {
                item.is_selected = true;
            } else {
                item.is_selected = false;
            }
        })
    }
}
