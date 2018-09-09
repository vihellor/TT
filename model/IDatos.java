package basics;

public interface IDatos {
    public String DRIVER[]={
		"sun.jdbc.odbc.dbc()dbcDriver",// Pinte Jdbc-ODBC
		"com.mysql.jdbc.Driver",
		"com.sqlmagic.tinysql.dbFileDriver",
		"oracle.jdbc.OracleDriver"
	};
    public String URL_DRIVER[]={
            "jdbc:odbc:",
            "jdbc:mysql://148.204.57.31:3306/",
            "jdbc:dbfFile",
            "jdbc:oracle:thin:@localhost:1521:"
    };
}
