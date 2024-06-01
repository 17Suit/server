CREATE MIGRATION m16eafauyejg7ocofpgjzjy5gfi6sjm4qtrxhqoqo3vkwdencv2efa
    ONTO initial
{
  CREATE TYPE default::Activity {
      CREATE REQUIRED PROPERTY created_at: std::datetime;
      CREATE REQUIRED PROPERTY description: std::str;
      CREATE PROPERTY endTime: std::datetime;
      CREATE REQUIRED PROPERTY name: std::str;
      CREATE PROPERTY startTime: std::datetime;
  };
  CREATE TYPE default::Currency {
      CREATE REQUIRED PROPERTY name: std::str;
      CREATE REQUIRED PROPERTY symbol: std::str;
  };
  CREATE TYPE default::Budget {
      CREATE REQUIRED LINK currency: default::Currency;
      CREATE REQUIRED PROPERTY amount: std::float32;
      CREATE REQUIRED PROPERTY max: std::float32;
      CREATE REQUIRED PROPERTY min: std::float32;
  };
  CREATE TYPE default::Continent {
      CREATE REQUIRED PROPERTY name: std::str;
  };
  CREATE TYPE default::Country {
      CREATE REQUIRED LINK continent: default::Continent;
      CREATE REQUIRED PROPERTY code: std::str;
      CREATE REQUIRED PROPERTY name: std::str;
  };
  CREATE TYPE default::State {
      CREATE REQUIRED LINK country: default::Country;
      CREATE REQUIRED PROPERTY code: std::str;
      CREATE REQUIRED PROPERTY name: std::str;
  };
  CREATE TYPE default::City {
      CREATE REQUIRED LINK country: default::Country;
      CREATE REQUIRED LINK state: default::State;
      CREATE REQUIRED PROPERTY created_at: std::datetime;
      CREATE REQUIRED PROPERTY latitude: std::float32;
      CREATE REQUIRED PROPERTY longitude: std::float32;
      CREATE REQUIRED PROPERTY name: std::str;
  };
  CREATE TYPE default::Destination {
      CREATE REQUIRED LINK city: default::City;
      CREATE REQUIRED LINK country: default::Country;
      CREATE REQUIRED LINK state: default::State;
      CREATE PROPERTY address: std::str;
      CREATE REQUIRED PROPERTY created_at: std::datetime;
      CREATE REQUIRED PROPERTY description: std::str;
      CREATE REQUIRED PROPERTY latitude: std::float32;
      CREATE REQUIRED PROPERTY longitude: std::float32;
      CREATE REQUIRED PROPERTY name: std::str;
  };
  CREATE TYPE default::Status {
      CREATE REQUIRED PROPERTY description: std::str;
      CREATE REQUIRED PROPERTY name: std::str;
  };
  CREATE TYPE default::Plan {
      CREATE MULTI LINK activities: default::Activity;
      CREATE LINK budget: default::Budget;
      CREATE LINK destination: default::Destination;
      CREATE REQUIRED LINK status: default::Status;
      CREATE REQUIRED PROPERTY created_at: std::datetime;
      CREATE REQUIRED PROPERTY description: std::str;
      CREATE PROPERTY endDate: std::datetime;
      CREATE PROPERTY startDate: std::datetime;
      CREATE REQUIRED PROPERTY title: std::str;
  };
  CREATE TYPE default::Permissions {
      CREATE REQUIRED PROPERTY `create`: std::bool;
      CREATE REQUIRED PROPERTY `delete`: std::bool;
      CREATE REQUIRED PROPERTY read: std::bool;
      CREATE REQUIRED PROPERTY `update`: std::bool;
      CREATE REQUIRED PROPERTY write: std::bool;
  };
  CREATE TYPE default::Rol {
      CREATE REQUIRED LINK permissions: default::Permissions;
      CREATE REQUIRED PROPERTY description: std::str;
      CREATE REQUIRED PROPERTY name: std::str;
  };
  CREATE TYPE default::User {
      CREATE MULTI LINK plans: default::Plan;
      CREATE REQUIRED LINK rol: default::Rol;
      CREATE PROPERTY birthday: std::datetime;
      CREATE REQUIRED PROPERTY email: std::str;
      CREATE REQUIRED PROPERTY password: std::str;
      CREATE REQUIRED PROPERTY username: std::str;
  };
  ALTER TYPE default::Plan {
      CREATE MULTI LINK members: default::User;
      CREATE REQUIRED LINK owner: default::User;
  };
};
