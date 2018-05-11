/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package basics;

/**
 *
 * @author Josimar
 */
public class usuario {
    private String id="";
    private String nickname="";
    private String nombre="";
    private String ocupacion="";
    private String apellidos="";
    private String correo="";
    private String contraseña="";

    public usuario() {
    }
    
    public String getId() {
        return id;
    }

    public String getNickname() {
        return nickname;
    }

    public String getNombre() {
        return nombre;
    }

    public String getOcupacion() {
        return ocupacion;
    }

    public String getApellidos() {
        return apellidos;
    }

    public String getCorreo() {
        return correo;
    }

    public String getContraseña() {
        return contraseña;
    }

    public void setId(String id) {
        this.id = id;
    }

    public void setNickname(String nickname) {
        this.nickname = nickname;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public void setOcupacion(String ocupacion) {
        this.ocupacion = ocupacion;
    }

    public void setApellidos(String apellidos) {
        this.apellidos = apellidos;
    }

    public void setCorreo(String correo) {
        this.correo = correo;
    }

    public void setContraseña(String contraseña) {
        this.contraseña = contraseña;
    }

    @Override
    public String toString() {
        return "usuario{" + "id=" + id + ", nickname=" + nickname + ", nombre=" + nombre + ", ocupacion=" + ocupacion + ", apellidos=" + apellidos + ", correo=" + correo + ", contrase\u00f1a=" + contraseña + '}';
    }
    
    
}
