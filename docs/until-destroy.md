## [until-destroy](https://github.com/ngneat/until-destroy)

### Usage
After installed with `npm i` you can use it inside a component where you need to unsubscribe an observable at on destroy of the component.


```
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({})
export class InboxComponent {
  ngOnInit() {
    interval(1000).pipe(untilDestroyed(this)).subscribe();
  }
}
```

You can set the checkProperties option to true if you want to unsubscribe from subscriptions properties automatically:

```
@UntilDestroy({ checkProperties: true })
@Component({})
export class HomeComponent {
  // We'll dispose it on destroy
  subscription = fromEvent(document, 'mousemove').subscribe();
}
```

For other informations see his [guide](https://github.com/ngneat/until-destroy).
