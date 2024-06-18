CREATE MIGRATION m1lmunsoruyighvfxvz2q57rv7pljyeyckiz5qtx2nfsba5amiegiq
    ONTO m1jbdtn2zo3djj4oxckodhzdmiyfetldjfpexbzk75osyalxaujd6a
{
  ALTER TYPE default::User {
      CREATE MULTI LINK groups: default::PlanGroup;
  };
};
