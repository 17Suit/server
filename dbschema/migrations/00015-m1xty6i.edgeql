CREATE MIGRATION m1xty6iaf4lv37fe24z4at3ut2ak3fleulniy3d6qsrnsrdqlpj5iq
    ONTO m1aude2zeibgfveq6ixv2gtunlpah7zpeies5thjmflxzfbqstwk5a
{
  ALTER TYPE default::User {
      ALTER PROPERTY username {
          RESET OPTIONALITY;
      };
  };
};
