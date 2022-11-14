import { Component, OnInit } from '@angular/core';

export interface IVideos {
    id: number;
    title?: string;
    author: string;
    views: number;
    is_primary: boolean;
}

@Component({
    selector: 'app-videos',
    templateUrl: './videos.component.html',
    styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {

    Videos: IVideos[];

    constructor() {
        this.Videos = [
            {
                id: 1,
                title: 'How to Improve Your Skills',
                author: 'Waseem Arshad',
                views: 20000,
                is_primary: true,
            },
            { id: 2, author: 'Michael Keliph', views: 15454, is_primary: false },
            { id: 3, author: 'Ahmed Yasin', views: 1984, is_primary: false },
            { id: 4, author: 'John Stanior', views: 2554, is_primary: false },
            { id: 5, author: 'John Doe', views: 2554, is_primary: false },
        ];
    }

    ngOnInit(): void {
    }

}
