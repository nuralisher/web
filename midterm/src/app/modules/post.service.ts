import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  posts: any = [
    {
      "id": 1,
      "title": "Post",
      "body" : "post body post body post body post body post body post body post body",
      "like": 50,
      "liked": false,
      "dislike": 10,
      "disliked": false,
      "created": 1699019510802
    },
    {
      "id": 2,
      "title": "Post",
      "body" : "post body post body post body post body post body post body post body",
      "like": 50,
      "liked": false,
      "dislike": 10,
      "disliked": false,
      "created": 1699019510802
    },
    {
      "id": 3,
      "title": "Post",
      "body" : "post body post body post body post body post body post body post body",
      "like": 50,
      "liked": false,
      "dislike": 10,
      "disliked": false,
      "created": 1699019510802
    },
    {
      "id": 4,
      "title": "Post",
      "body" : "post body post body post body post body post body post body post body",
      "like": 50,
      "liked": false,
      "dislike": 10,
      "disliked": false,
      "created": 1699019510802
    },
    {
      "id": 5,
      "title": "Post",
      "body" : "post body post body post body post body post body post body post body",
      "like": 50,
      "liked": false,
      "dislike": 10,
      "disliked": false,
      "created": 1699019510802
    }
  ];
  profile = {
    name: 'Alisher',
    surname: 'Nurhzanuly',
    email: 'ali_nurhzanuly@kbtu.kz',
  }

  constructor(
  ) {}
}
