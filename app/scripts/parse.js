( function( document ) {
  'use strict';

  try {
    Parse.initialize( "JdgT5RtwJaaoDRNe9bx5LF3TyVj20RGXMKMv6jQ8", "MttzOIoQIxkHFd6IuCrsk8AG4FeUy0jTP741gtIg" );
    // alert( "Success!" );
  } catch( error ) {
    alert( "Failed to initialize webapp connection to the database. Error: " + error.message );
  }

})( document );
