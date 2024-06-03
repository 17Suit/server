CREATE MIGRATION m1fzojtzzukhmtgypg46zw4snwlm2lbolx5mjuedzpjp4migmotgka
    ONTO m1q3rjwp6crmmuh2bjtjezrzzaccndpg5hctdyzqksrz37gmvor6oq
{
  ALTER TYPE default::Rol {
      ALTER LINK permissions {
          SET REQUIRED USING (<default::Permissions>{});
      };
  };
};
