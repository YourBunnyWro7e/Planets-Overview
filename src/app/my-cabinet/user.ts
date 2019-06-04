export interface User {
  items: [{
    data: [{
      title: string,
      center: string,
      date_created: string,
      description: string,
      nasa_id: string,
      keywords: [{}]
    }];
    href: string;
    links: [{ href: string }];
  }];
}
