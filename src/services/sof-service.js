class SofService {
  _apiBase = 'https://api.stackexchange.com';
  _data = [
    {"tags":["python","tensorflow","keras"],"owner":{"reputation":1,"user_id":8028096,"profile_image":"https://www.gravatar.com/avatar/6647c3726f7032d82ab7ad7227a5ab8f?s=128&d=identicon&r=PG&f=1","display_name":"Arne Aarts","link":"https://stackoverflow.com/users/8028096/arne-aarts"},"is_answered":false,"view_count":15,"answer_count":1,"score":0,"creation_date":1603458063,"question_id":64500549,"title":"TF 2.3 running multiple models in a loop slows down over time"},{"tags":["oracle","postgresql","hibernate","sql-function","postgresql-10"],"owner":{"reputation":117,"user_id":2788975,"accept_rate":83,"profile_image":"https://i.stack.imgur.com/4qRJu.png?s=128&g=1","display_name":"Geison Santos","link":"https://stackoverflow.com/users/2788975/geison-santos"},"is_answered":false,"view_count":10,"answer_count":0,"score":0,"creation_date":1603459609,"question_id":64500924,"title":"How to define a parameter that will be used as an IN argument inside a function?"},{"tags":["c#",".net","domain-driven-design"],"owner":{"reputation":2120,"user_id":5547718,"accept_rate":79,"profile_image":"https://www.gravatar.com/avatar/cfecfb098d7f4a5587f3d58615f35247?s=128&d=identicon&r=PG&f=1","display_name":"ThatBrianDude","link":"https://stackoverflow.com/users/5547718/thatbriandude"},"is_answered":false,"view_count":23,"answer_count":1,"score":-1,"creation_date":1603454373,"question_id":64499590,"title":"Is it good practice to have I/O in my domain code?"},{"tags":["java"],"owner":{"reputation":1,"user_id":14506290,"profile_image":"https://www.gravatar.com/avatar/b412153344a09db0019eaa6c3c32b432?s=128&d=identicon&r=PG&f=1","display_name":"VishaalC","link":"https://stackoverflow.com/users/14506290/vishaalc"},"is_answered":true,"view_count":29,"answer_count":3,"score":-4,"creation_date":1603459285,"question_id":64500844,"title":"Cannot make static reference to non static field a"},{"tags":["python"],"owner":{"reputation":23,"user_id":9411377,"profile_image":"https://www.gravatar.com/avatar/ec48470ed5de63b30fd11e7cc1601ec9?s=128&d=identicon&r=PG&f=1","display_name":"Michael Esporlas","link":"https://stackoverflow.com/users/9411377/michael-esporlas"},"is_answered":false,"view_count":15,"answer_count":1,"score":-1,"creation_date":1603458829,"question_id":64500734,"title":"Return the value of a nested dictionary or nested list with a Dynamic Index"},{"tags":["java","logging","configuration","log4j","log4j2"],"owner":{"reputation":3554,"user_id":610159,"accept_rate":78,"profile_image":"https://i.stack.imgur.com/4e9KP.jpg?s=128&g=1","display_name":"Andrei Petrenko","link":"https://stackoverflow.com/users/610159/andrei-petrenko"},"is_answered":true,"view_count":38494,"accepted_answer_id":16739318,"answer_count":6,"score":23,"creation_date":1369319162,"question_id":16716556,"title":"How to specify Log4J 2.x config location?"},{"tags":["java","multithreading","spring-boot","graphql","reactivex"],"owner":{"reputation":2170,"user_id":2353657,"accept_rate":60,"profile_image":"https://i.stack.imgur.com/Ob5yH.jpg?s=128&g=1","display_name":"Endrik","link":"https://stackoverflow.com/users/2353657/endrik"},"is_answered":false,"view_count":2,"answer_count":0,"score":0,"creation_date":1603459954,"question_id":64501005,"title":"Integrate Spring context in thread while using Reactivex for GraphQL"},{"tags":["excel","vba"],"owner":{"reputation":1,"user_id":11063774,"profile_image":"https://www.gravatar.com/avatar/0c9e8d7cf5dc8e0d5adc66ed1928573f?s=128&d=identicon&r=PG&f=1","display_name":"Zeek77","link":"https://stackoverflow.com/users/11063774/zeek77"},"is_answered":false,"view_count":9,"answer_count":1,"score":0,"creation_date":1603459105,"question_id":64500796,"title":"How To Copy Range of Last Row of Data and Paste into Row below It"},{"tags":["android-studio","flutter","dart","proguard"],"owner":{"reputation":61,"user_id":12840228,"profile_image":"https://www.gravatar.com/avatar/6690bdc8cd553b5fa27e99de61b26677?s=128&d=identicon&r=PG&f=1","display_name":"Jason Lloyd","link":"https://stackoverflow.com/users/12840228/jason-lloyd"},"is_answered":false,"view_count":2,"answer_count":0,"score":0,"creation_date":1603459942,"question_id":64501003,"title":"Flutter: Execution failed for task &#39;:app:transformClassesAndResourcesWithProguardForRelease&#39;"},{"tags":["amazon-s3","amazon-cloudfront","aws-cdk"],"owner":{"reputation":959,"user_id":848808,"profile_image":"https://www.gravatar.com/avatar/f04493e2e65773c7ae616dbe1cbebabe?s=128&d=identicon&r=PG","display_name":"Nick Ager","link":"https://stackoverflow.com/users/848808/nick-ager"},"is_answered":false,"view_count":17,"answer_count":0,"score":0,"creation_date":1603432402,"question_id":64494599,"title":"AWS CDK CloudFront to S3 redirection"},{"tags":["python","pandas","dataframe","countif"],"owner":{"reputation":1,"user_id":8133371,"profile_image":"https://i.stack.imgur.com/WXmJD.jpg?s=128&g=1","display_name":"Yusuf Cattaneo","link":"https://stackoverflow.com/users/8133371/yusuf-cattaneo"},"is_answered":false,"view_count":5,"answer_count":1,"score":0,"creation_date":1603459792,"question_id":64500974,"title":"Creating a New Dataframe based off a SumIf Calculation in Another Datafram Using Pandas"},{"tags":["html","bootstrap-4"],"owner":{"reputation":329,"user_id":10371713,"profile_image":"https://www.gravatar.com/avatar/694c2931a10b1a8d65f148d274a10d82?s=128&d=identicon&r=PG&f=1","display_name":"John","link":"https://stackoverflow.com/users/10371713/john"},"is_answered":false,"view_count":14,"answer_count":2,"score":1,"creation_date":1603458609,"question_id":64500677,"title":"Right align Bootstrap4 Toggle buttons"},{"tags":["multithreading","flutter","dart","dart-isolates"],"owner":{"reputation":1,"user_id":14486996,"profile_image":"https://lh3.googleusercontent.com/-_HCW1BEGYyM/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucmVWnb2ehrhvUEsBYgsWu2nrj5HWg/s96-c/photo.jpg?sz=128","display_name":"test firma","link":"https://stackoverflow.com/users/14486996/test-firma"},"is_answered":true,"view_count":27,"accepted_answer_id":64499882,"answer_count":1,"score":-2,"creation_date":1603453307,"question_id":64499331,"title":"Multithreading for MultiMethods in Flutter"},{"tags":["discord","discord.py","pinterest"],"owner":{"reputation":19,"user_id":14139652,"profile_image":"https://lh4.googleusercontent.com/-01yIR8OBmEs/AAAAAAAAAAI/AAAAAAAAABM/hXjkmw257xU/photo.jpg?sz=128","display_name":"Benjamin","link":"https://stackoverflow.com/users/14139652/benjamin"},"is_answered":false,"view_count":9,"answer_count":0,"score":-4,"creation_date":1603459707,"question_id":64500956,"title":"Is it possible to use Pinterest API with discord.py?"},{"tags":["configuration","switch-statement","nuke"],"owner":{"reputation":157,"user_id":2538833,"accept_rate":50,"profile_image":"https://www.gravatar.com/avatar/45174993d4c50de8f6aa64dbb0b5f4a9?s=128&d=identicon&r=PG","display_name":"user2538833","link":"https://stackoverflow.com/users/2538833/user2538833"},"is_answered":false,"view_count":5,"answer_count":0,"score":0,"creation_date":1603459229,"question_id":64500828,"title":"Configure multiple switch values in Nuke"},{"tags":["javascript"],"owner":{"reputation":352,"user_id":5140425,"accept_rate":0,"profile_image":"https://www.gravatar.com/avatar/e9959f4dbc2c47ed14a666bfad53efaa?s=128&d=identicon&r=PG&f=1","display_name":"LilRazi","link":"https://stackoverflow.com/users/5140425/lilrazi"},"is_answered":false,"view_count":5,"answer_count":0,"score":0,"creation_date":1603459931,"question_id":64501000,"title":"Javascript adding adding unexpected number of zeros and one"},{"tags":["arrays","swift","swiftui"],"owner":{"reputation":15,"user_id":14386922,"profile_image":"https://www.gravatar.com/avatar/f1af853cc62ac7c743243e7fb021b613?s=128&d=identicon&r=PG&f=1","display_name":"Diego Gonzalez","link":"https://stackoverflow.com/users/14386922/diego-gonzalez"},"is_answered":false,"view_count":26,"answer_count":0,"score":0,"creation_date":1603421969,"question_id":64493237,"title":"Binding arrays in SwiftUI"},{"tags":["html","css","dom","accessibility","tabindex"],"owner":{"reputation":29,"user_id":13720621,"profile_image":"https://www.gravatar.com/avatar/d8405ba359c8284ade06371d86569a2e?s=128&d=identicon&r=PG&f=1","display_name":"rndware","link":"https://stackoverflow.com/users/13720621/rndware"},"is_answered":false,"view_count":2,"answer_count":0,"score":0,"creation_date":1603459922,"question_id":64500999,"title":"How to tab directly to child element and ignore parent"},{"tags":["java","selenium","intellij-idea","testng"],"owner":{"reputation":23,"user_id":12634497,"profile_image":"https://lh6.googleusercontent.com/-D07iCXd6VkM/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3rfKHM7IgiUOKXh0L8Dfg7Xq_-fOdQ/photo.jpg?sz=128","display_name":"Hao","link":"https://stackoverflow.com/users/12634497/hao"},"is_answered":false,"view_count":14,"answer_count":0,"score":-1,"creation_date":1603454230,"question_id":64499546,"title":"Why I&#39;m getting an NPE on multiple &lt;test&gt; tag on testng.xml using Intelli J?"},{"tags":["android","kotlin","okhttp","moshi"],"owner":{"reputation":49,"user_id":10680152,"profile_image":"https://www.gravatar.com/avatar/95525cba0cef3c3afa699e8a44d0d414?s=128&d=identicon&r=PG&f=1","display_name":"Raphael M","link":"https://stackoverflow.com/users/10680152/raphael-m"},"is_answered":true,"view_count":16,"accepted_answer_id":64498370,"answer_count":1,"score":1,"creation_date":1603447160,"question_id":64497859,"title":"How to parse un json string into a List with MOSHI"},{"tags":["c#","asp.net","multithreading","locking"],"owner":{"reputation":724,"user_id":860233,"accept_rate":53,"profile_image":"https://www.gravatar.com/avatar/4391f7ef50dfccf09fc68ae17368d9b8?s=128&d=identicon&r=PG","display_name":"Glenncito","link":"https://stackoverflow.com/users/860233/glenncito"},"is_answered":false,"view_count":11,"answer_count":0,"score":0,"creation_date":1603459114,"question_id":64500798,"title":"Unable to implement data parsing in a multi-threaded context using lock"},{"tags":["raml","raml-1.0"],"owner":{"reputation":4036,"user_id":1944451,"accept_rate":87,"profile_image":"https://i.stack.imgur.com/LGyvd.jpg?s=128&g=1","display_name":"ray","link":"https://stackoverflow.com/users/1944451/ray"},"is_answered":false,"view_count":10,"answer_count":1,"score":0,"creation_date":1603333519,"question_id":64474344,"title":"RAML - how to design endpoints with parameters?"},{"tags":["javascript","statistics","data-consistency"],"owner":{"reputation":11,"user_id":7877431,"profile_image":"https://www.gravatar.com/avatar/3a3f1aa1ed8a6b1742f290a3fc231ff6?s=128&d=identicon&r=PG&f=1","display_name":"Poojitha","link":"https://stackoverflow.com/users/7877431/poojitha"},"is_answered":false,"view_count":10,"answer_count":0,"score":0,"creation_date":1603376296,"question_id":64484242,"title":"How do I get reliable speed measurements with consistency?"},{"tags":["angular","angular-material"],"owner":{"reputation":509,"user_id":2255814,"accept_rate":31,"profile_image":"https://www.gravatar.com/avatar/8865a569f94d4a96eb1f0d35ab53ce0b?s=128&d=identicon&r=PG","display_name":"Latcie","link":"https://stackoverflow.com/users/2255814/latcie"},"is_answered":false,"view_count":18,"answer_count":1,"score":0,"creation_date":1603420261,"question_id":64493025,"title":"Angular Material themes"},{"tags":["javascript"],"owner":{"reputation":11,"user_id":14262041,"profile_image":"https://graph.facebook.com/10158610684614731/picture?type=large","display_name":"Carlos Escobar","link":"https://stackoverflow.com/users/14262041/carlos-escobar"},"is_answered":false,"view_count":43,"answer_count":2,"score":0,"creation_date":1603458714,"question_id":64500708,"title":"Filter an array with multiple conditions fetched from user"},{"tags":["perl","promise","user-agent","mojolicious"],"owner":{"reputation":59906,"user_id":124486,"accept_rate":46,"profile_image":"https://www.gravatar.com/avatar/605442f85418d858e2ce1e1aea2092bb?s=128&d=identicon&r=PG","display_name":"Evan Carroll","link":"https://stackoverflow.com/users/124486/evan-carroll"},"is_answered":true,"view_count":35,"answer_count":2,"score":1,"creation_date":1603430117,"question_id":64494243,"title":"How can I cancel in-flight requests from Mojo::UserAgent?"},{"tags":["django","django-models","many-to-many","django-orm"],"owner":{"reputation":21,"user_id":12846276,"profile_image":"https://www.gravatar.com/avatar/b2f55b5d7e78f34704caef36d4243c2a?s=128&d=identicon&r=PG&f=1","display_name":"truthseeker99","link":"https://stackoverflow.com/users/12846276/truthseeker99"},"is_answered":false,"view_count":2,"answer_count":0,"score":0,"creation_date":1603459896,"question_id":64500994,"title":"Django ManyToMany intermediary through table &amp; constraints for product watchlists"},{"tags":["php","mysql","ajax","mysqli"],"owner":{"reputation":1,"user_id":3601941,"profile_image":"https://www.gravatar.com/avatar/8ebfa7ed5c7cdd20450a9a8424e935c4?s=128&d=identicon&r=PG&f=1","display_name":"user3601941","link":"https://stackoverflow.com/users/3601941/user3601941"},"is_answered":false,"view_count":10,"answer_count":0,"score":-3,"creation_date":1603457772,"question_id":64500466,"title":"Php cart not showing product varient"},{"tags":["android-studio","flutter","visual-studio-code"],"owner":{"reputation":1,"user_id":14506797,"profile_image":"https://lh3.googleusercontent.com/a-/AOh14GhscgviGbGyp3SG-oKNvFfmIRMVmnUTJ5N8q4I4=s96-c=k-s128","display_name":"Jithin S","link":"https://stackoverflow.com/users/14506797/jithin-s"},"is_answered":true,"view_count":15,"answer_count":3,"score":0,"creation_date":1603459368,"question_id":64500866,"title":"Why do we need to use Android studio for building a flutter app?"},{"tags":["docker","go","x509","docker-multi-stage-build","go-build"],"owner":{"reputation":1656,"user_id":8030651,"accept_rate":50,"profile_image":"https://i.stack.imgur.com/aOHs0.jpg?s=128&g=1","display_name":"kozmo","link":"https://stackoverflow.com/users/8030651/kozmo"},"is_answered":false,"view_count":91,"answer_count":2,"score":0,"creation_date":1603281109,"question_id":64462922,"title":"docker multi-stage build Go image in private network - x509: certificate signed by unknown authority"}
  ];

  getResponse = async (url) => {
    const res = await fetch(this._apiBase + url);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}` +
        `, received ${res.status}`);
    }
    const body = res.json();
    return body;
  }
  
  getQuestions = (url) => {
    return this.getResponse(url);
    // return new Promise((resolve, reject) => {
    //   setTimeout(() => {
    //     if (Math.random() > 0.75) {
    //       reject(new Error('Something bad happened'));
    //     } else {
    //       resolve(this._data);
    //     }
    //   }, 700);
    // })
  }
  getTags() {
    return [
        {
          "count": 2107426,
          "name": "javascript"
        },
        {
          "count": 1723466,
          "name": "java"
        },
        {
          "count": 1563780,
          "name": "python"
        },
        {
          "count": 1442844,
          "name": "c#"
        },
        {
          "count": 1375699,
          "name": "php"
        },
        {
          "count": 1304948,
          "name": "android"
        },
        {
          "count": 1029575,
          "name": "html"
        },
        {
          "count": 999693,
          "name": "jquery"
        },
        {
          "count": 696695,
          "name": "c++"
        },
        {
          "count": 688899,
          "name": "css"
        },
        {
          "count": 643118,
          "name": "ios"
        },
        {
          "count": 609825,
          "name": "mysql"
        }
    ];
  }
};

export default SofService;