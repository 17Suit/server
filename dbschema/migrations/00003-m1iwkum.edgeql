CREATE MIGRATION m1iwkumfi5dcewwf5yejqmco2yjaihqywi54zxfdzfnj25gchems6a
    ONTO m1m2v7ylq6avf4k5jlmog66rrkzc6uhp6b3tkhulb4szesqtakmdla
{
  ALTER TYPE default::Rol {
      ALTER LINK permissions {
          RESET CARDINALITY USING (SELECT
              .permissions 
          LIMIT
              1
          );
      };
  };
};
