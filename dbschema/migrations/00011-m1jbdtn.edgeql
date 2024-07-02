CREATE MIGRATION m1jbdtn2zo3djj4oxckodhzdmiyfetldjfpexbzk75osyalxaujd6a
    ONTO m1foixdfjbcca4vekyyh4z3ikldic2hpojtw7d5nc5oefdszzbhqpq
{
  ALTER TYPE default::PlanGroup {
      CREATE MULTI LINK plans: default::Plan;
  };
  ALTER TYPE default::User {
      ALTER PROPERTY name {
          SET REQUIRED USING (<std::str>{});
      };
  };
};
