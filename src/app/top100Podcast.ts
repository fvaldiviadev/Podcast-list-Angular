import { Podcast } from "./podcast";

export class Top100PodcastResponse{
    feed : Feed;
}

export class Feed{
    author : Author;
    entry : Podcast[];
    icon: Icon;
    id: Id;
    link:Attributes[];
    rigths:Rigths;
    title:Title;
    updated:Updated;
}

export class Author{
    name : Name;
}

export class Icon{
    label : string;
}

export class Id{
    label : string;
}

export class Rigths{
    label:string;
}

export class Title{
    label:string;
}

export class Updated{
    label:string;
}

export class Attributes{
    href:string;
    rel:string;
    type:string;
}

export class Name{
    label : string;
}
