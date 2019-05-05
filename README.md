# angular-switchmap-tut

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/angular-switchmap-tut)

  Program to explain the SwitchMap.
  Following application recieves the current trending platform and then sends the promotional messages to your followers on that platform.
  Working : It subscribes to the treding platform stream. And then sends sends promotional massage to your friends on that platform.
  Note that as soon as the trend changes, we have to unsubscribe from the previous trend and subscibe to the current trend. This is where switchMap comes into picture.

  Example -> When the trending platform is Facebook, promotions are sent to Facebook friends. When the platform changes to Twitter. Facebook friends won't receive messages but now Twitter friends will start receiving messages.
