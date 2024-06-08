CREATE MIGRATION m15ak5iuuh3j5ik5euwpddvifok3fdp6wclzo422f4om43houy6itq
    ONTO m1fzojtzzukhmtgypg46zw4snwlm2lbolx5mjuedzpjp4migmotgka
{
  ALTER TYPE default::Activity {
      CREATE MULTI LINK participants: default::User;
  };
  CREATE SCALAR TYPE default::Priority EXTENDING std::str;
  ALTER TYPE default::Activity {
      CREATE REQUIRED PROPERTY priority: default::Priority {
          SET REQUIRED USING (<default::Priority>{});
      };
  };
  CREATE TYPE default::PlanGroup {
      CREATE REQUIRED LINK creator: default::User;
      CREATE MULTI LINK members: default::User;
      CREATE REQUIRED PROPERTY created_at: std::datetime;
      CREATE REQUIRED PROPERTY description: std::str;
      CREATE REQUIRED PROPERTY name: std::str;
  };
};
