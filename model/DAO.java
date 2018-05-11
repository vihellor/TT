/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package basics;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.logging.Level;
import java.util.logging.Logger;

/**
 *
 * @author Josimar
 */
public class DAO {
    ConectorBD con=new ConectorBD("tt","root","root");
    Connection conn=con.getConexion();

    public boolean existeU(String correo){
        String query= "SELECT id FROM usuario WHERE correo='" + correo + "';" ;
        try {
            Statement stmt=conn.prepareStatement(query);
            ResultSet rs=stmt.executeQuery(query);
            String correou=rs.getString("correo");
            if(correo.trim()==correou.trim())
                return true;
        } catch (SQLException ex) {
            Logger.getLogger(DAO.class.getName()).log(Level.SEVERE, null, ex);
        }
        return false;
    }
    
    public boolean iniciarS(String correo, String password){
        String query= "SELECT contrasena FROM usuario WHERE correo='" + correo + "';" ;
        try {
            Statement stmt=conn.prepareStatement(query);
            ResultSet rs=stmt.executeQuery(query);
            String contrasenau=rs.getString("contrasena");
            if(password.trim()==contrasenau.trim())
                return true;
        } catch (SQLException ex) {
            Logger.getLogger(DAO.class.getName()).log(Level.SEVERE, null, ex);
        }
        return false;
    }
    
    public usuario obtenerUsuario(String id){
        String query= "SELECT * FROM usuario WHERE correo='" + id + "';" ;
        String correo="";
        String nombre="";
        String apellidos="";
        String ocupacion="";
        String nickname="";   
        try {
            Statement stmt=conn.prepareStatement(query);
            ResultSet rs=stmt.executeQuery(query);
            correo=rs.getString("correo");
            nombre=rs.getString("nombre");
            apellidos=rs.getString("apellidos");
            ocupacion=rs.getString("ocupacion");
            nickname=rs.getString("nickname");
        } catch (SQLException ex) {
            Logger.getLogger(DAO.class.getName()).log(Level.SEVERE, null, ex);
        }
        usuario user=new usuario();
        user.setId(id);
        user.setCorreo(correo);
        user.setNombre(nombre);
        user.setApellidos(apellidos);
        user.setOcupacion(ocupacion);
        user.setNickname(nickname);
        return user;
    }
    
    public boolean registrarU(String correo, String nickname, String nombre, String apellidos, String ocupacion, String contrasena){
        String query= "INSERT INTO usuario (nombre,apellidos,nickname,ocupacion,correo,contrasena) VALUES"
                + "("+nombre+","+apellidos+","+nickname+","+ocupacion+","+correo+","+contrasena+");" ;
        try {
            Statement stmt=conn.prepareStatement(query);
            int i=stmt.executeUpdate(query);
            if(i==1)
                return true;
        } catch (SQLException ex) {
            Logger.getLogger(DAO.class.getName()).log(Level.SEVERE, null, ex);
        }
        return false;
    }
    
    public boolean verificaC(String id, String contrasena){
        String query= "SELECT contrasena FROM usuario WHERE idUsuario='" + id + "';" ;
        try {
            Statement stmt=conn.prepareStatement(query);
            ResultSet rs=stmt.executeQuery(query);
            String contrasenaU=rs.getString("contrasena");
            if(contrasenaU.trim()==contrasena.trim())
                return true;
        } catch (SQLException ex) {
            Logger.getLogger(DAO.class.getName()).log(Level.SEVERE, null, ex);
        }
        return false;
    }
    
    public boolean cambiaC(String id, String nuevaContrasena){
        String query= "UPDATE usuario SET contrasena='"+nuevaContrasena+"' WHERE id='"+id+"';" ;
        try {
            Statement stmt=conn.prepareStatement(query);
            int i=stmt.executeUpdate(query);
            if(i==1)
                return true;
        } catch (SQLException ex) {
            Logger.getLogger(DAO.class.getName()).log(Level.SEVERE, null, ex);
        }
        return false;
    }
    
}
