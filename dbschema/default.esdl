module default {

  type Permissions {
    required read -> bool;  
    required write -> bool;
    required `create` -> bool;
    required `update` -> bool;
    required `delete` -> bool;
  }

  type Rol {
    required property name -> str {
      constraint exclusive;
    }
    required description -> str;
    required permissions -> Permissions;
  }

  type User {
    required username -> str {
      constraint exclusive;
    }
    required email -> str;
    required password -> str;
    birthday -> datetime;
    required rol -> Rol;
    multi plans -> Plan;
  }  

  type Status {
    required name -> str;
    required description -> str;
  }

  type Plan {
    required title -> str;
    required description -> str;
    required created_at -> datetime;
    required status -> Status;
    required owner -> User;
    startDate -> datetime;
    endDate -> datetime;
    budget -> Budget;
    destination -> Destination;
    multi members -> User;
    multi activities -> Activity;
  }

  type Budget {
    required amount -> float32;
    required min -> float32;
    required max -> float32;
    required currency -> Currency;
  }

  type Currency {
    required name -> str;
    required symbol -> str;
  }

  type Destination {
    required name -> str;
    required description -> str;
    required country -> Country;
    required state -> State;
    required city -> City;
    address -> str;
    required latitude -> float32;
    required longitude -> float32;
    required created_at -> datetime;
  }

  type Continent {
    required name -> str;
  }

  type Country {
    required name -> str;
    required code -> str;
    required continent -> Continent;
  }

  type State {
    required name -> str;
    required code -> str;
    required country -> Country;
  }

  type City {
    required name -> str;
    required country -> Country;
    required state -> State;
    required latitude -> float32;
    required longitude -> float32;
    required created_at -> datetime;
  }

  type Activity {
    required name -> str;
    required description -> str;
    required created_at -> datetime;
    startTime -> datetime;
    endTime -> datetime;
    required priority -> Priority;
    multi participants -> User;
  }

  enum Priority {
    Low;
    Medium;
    High;
  }

  type Group {
    required name -> str;
    required description -> str;
    required created_at -> datetime;
    required creator -> User;
    multi members -> User;
  }
}
