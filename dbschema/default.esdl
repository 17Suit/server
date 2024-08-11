module default {

  type Permissions {
    required read -> bool;
    required write -> bool;
    required `create` -> bool;
    required `update` -> bool;
    required `delete` -> bool;
  }

  type Rol {
    required name -> str {
      constraint exclusive;
    }
    required description -> str;
    required permissions -> Permissions;
  }

  type User {
    name -> str;
    required email -> str {
        constraint exclusive;
    }
    username: std::str {
        constraint std::exclusive;
    }
    password: std::str;
    emailVerified -> datetime;
    birthday: std::datetime;
    image -> str;
    multi link accounts := .<user[is Account];
    multi link sessions := .<user[is Session];
    createdAt -> datetime {
        default := datetime_current();
    };
    multi link plans: default::Plan;
    link rol: default::Rol;
    multi link groups: default::PlanGroup;
  }

  type Account {
    required userId := .user.id;
    required type -> str;
    required provider -> str;
    required providerAccountId -> str {
    constraint exclusive;
    };
    refresh_token -> str;
    access_token -> str;
    expires_at -> int64;
    token_type -> str;
    scope -> str;
    id_token -> str;
    session_state -> str;
    required link user -> User {
        on target delete delete source;
    };
    createdAt -> datetime {
        default := datetime_current();
    };

    constraint exclusive on ((.provider, .providerAccountId))
  }

  type Session {
    required sessionToken -> str {
        constraint exclusive;
    }
    required userId := .user.id;
    required expires -> datetime;
    required link user -> User {
        on target delete delete source;
    };
    createdAt -> datetime {
        default := datetime_current();
    };
  }

  type VerificationToken {
    required identifier -> str;
    required token -> str {
        constraint exclusive;
    }
    required expires -> datetime;
    createdAt -> datetime {
        default := datetime_current();
    };

    constraint exclusive on ((.identifier, .token))
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

  scalar type Priority extending str;

  type Activity {
    required name -> str;
    required description -> str;
    required created_at -> datetime;
    startTime -> datetime;
    endTime -> datetime;
    required priority -> Priority;
    multi participants -> User;
  }

  type PlanGroup {
    required name -> str;
    required description -> str;
    required created_at -> datetime;
    required creator -> User;
    multi plans -> Plan;
    multi members -> User;
  }
}
