import { Component, OnInit } from '@angular/core';

export interface IPeople {
    id: number;
    position?: string;
    name: string;
}

@Component({
    selector: 'app-people',
    templateUrl: './people.component.html',
    styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

    People: IPeople[];

    constructor() {
        this.People = [
            {
                id: 1,
                name: 'Waseem Arshad',
                position: "User Interface Designer",
            },
            { id: 2, name: 'Michael Keliph' },
            { id: 3, name: 'Ahmed Yasin' },
            { id: 4, name: 'John Stanior' },
            { id: 5, name: 'John Doe' },
        ];
    }

    ngOnInit(): void {
    }

}
