import { Component, OnInit } from '@angular/core';

export interface IChannels {
    id: number;
    title: string;
}

@Component({
    selector: 'app-channels',
    templateUrl: './channels.component.html',
    styleUrls: ['./channels.component.css']
})
export class ChannelsComponent implements OnInit {

    Channels: IChannels[];

    constructor() {
        this.Channels = [
            { id: 1, title: "Google" },
            { id: 2, title: "Dribbble" },
            { id: 3, title: "Microsoft" },
            { id: 4, title: "Behance" },
            { id: 5, title: "Weather Channel" },
            { id: 6, title: "Gurus" },
        ]
    }

    ngOnInit(): void {
    }

}
