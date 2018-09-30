export class Podcast{
    category : Category;
    id : AttributesAndLabel;
    "im:artist":Artist;
    contentType:ContentType;
    "im:image":Image;
    name: Name;
    price :AttributesAndLabel;
    releaseDate:AttributesAndLabel;
    link:Link;
    summary:Summary;
    title: Title;
}

export class Category{
    attributes : Attributes;
}

export class AttributesAndLabel{
    attributes : Attributes;
    label : string;
}

export class Artist{
    label : string;
}

export class ContentType{
    attributes : Attributes;
}

export class Image{
    images:AttributesAndLabel[];
}

export class Name{
    label:string;
}

export class Link{
    attributes:Attributes;
}

export class Summary{
    label:string;
}

export class Title{
    label:string;
}


export class Attributes{
    id: string;
    label: string;
    scheme: string;
    term: string;
    height:string;
    amount:string;
    currency:string;
    href:string;
    rel:string;
    type:string;

}