CREATE MIGRATION m1zcuny5hvm3gnji4uovzhpv6ezdps6lwov5ucykouud2zverzhm6a
    ONTO m15ak5iuuh3j5ik5euwpddvifok3fdp6wclzo422f4om43houy6itq
{
  ALTER TYPE default::User {
      CREATE MULTI LINK groups: default::PlanGroup;
  };
};
