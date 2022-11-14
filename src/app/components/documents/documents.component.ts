import { Component, OnInit } from '@angular/core';

export interface IDocuments {
    id: number;
    title: string;
    author?: string;
    views: number;
}

@Component({
    selector: 'app-documents',
    templateUrl: './documents.component.html',
    styleUrls: ['./documents.component.css']
})
export class DocumentsComponent implements OnInit {

    Documents: IDocuments[];

    constructor() {
        this.Documents = [
            {
                id: 1,
                author: 'Waseem Arshad',
                title: "Mobile UI & UX Design 2022",
                views: 187887
            },
            { id: 2, title: 'HTML 5 Usage', views: 15454 },
            { id: 3, title: 'How to become expert', views: 1984 },
            { id: 4, title: '2022 Marketing Trends', views: 2554 },
            { id: 5, title: '2022 Marketing Trends', views: 2554 },
        ]
    }

    ngOnInit(): void {
    }

}
