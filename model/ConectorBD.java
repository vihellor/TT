package basics;

import java.sql.*;
import java.util.logging.Level;
import java.util.logging.Logger;

/**
 *
 * @author victor
 */
public class ConectorBD implements IDatos{
    private String base;
	private String usuario;
	private String password;
	private Connection conn;
	private int cual;
	public ConectorBD(String bd, String usu, String pass){
		base=bd;
		usuario=usu;
		password=pass;
		cual=1;
	}
	public void setCual(int sel){
		cual=sel;
	}
	public boolean cargarControlador(){
		boolean cargada=false;
		try {
			System.out.print("Cargando Driver: "+DRIVER[cual]);
			Class.forName(DRIVER[cual]).newInstance();
			cargada=true;	
			System.out.println("DONE!");
		}
		catch(InstantiationException ie){
			ie.printStackTrace();
		}catch(ClassNotFoundException cnfe){
			cnfe.printStackTrace();
		}
		catch(IllegalAccessException iae){
			iae.printStackTrace();
		}
		return cargada;
	}
	private String conectorURL(){
		String conector=URL_DRIVER[cual];
		if(cual==0){
			conector+=base+"?user="+usuario+"password="+password;
		}
		else{
			conector+=base;
		}
		return conector;
	}
	public Connection getConexion(){
		conn=null;
		if(cargarControlador()){
			String conector= new String();
                        conector = conectorURL();
			if(cual==0){
                            try {
                                conn=DriverManager.getConnection(conector);
                            } catch (SQLException ex) {
                                Logger.getLogger(ConectorBD.class.getName()).log(Level.SEVERE, null, ex);
                            }
			}
			else{
                            try {
                                conn=DriverManager.getConnection(conector,usuario,password);
                            } catch (SQLException ex) {
                                Logger.getLogger(ConectorBD.class.getName()).log(Level.SEVERE, null, ex);
                            }
			}
			System.out.println("hecho");
		}

		else{
			System.out.println("No es posible conectarse a la BD");
		}
		return conn;
	}
	public void cerrarConexion(){
		try{
			if(conn!=null){
				conn.close();
			}
		}catch(SQLException sqle){
			sqle.printStackTrace();
		}
	}
}
