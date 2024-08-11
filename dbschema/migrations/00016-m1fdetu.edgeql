CREATE MIGRATION m1fdetutshrawheutzhfnsisoqgyklusjdwvdxf6sn6mxfs2uiyd4a
    ONTO m1xty6iaf4lv37fe24z4at3ut2ak3fleulniy3d6qsrnsrdqlpj5iq
{
  ALTER TYPE default::User {
      ALTER LINK rol {
          RESET OPTIONALITY;
      };
  };
};
