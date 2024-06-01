CREATE MIGRATION m1m2v7ylq6avf4k5jlmog66rrkzc6uhp6b3tkhulb4szesqtakmdla
    ONTO m16eafauyejg7ocofpgjzjy5gfi6sjm4qtrxhqoqo3vkwdencv2efa
{
  ALTER TYPE default::Rol {
      ALTER LINK permissions {
          SET MULTI;
          RESET OPTIONALITY;
      };
  };
};
