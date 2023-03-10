#include <iostream>
#include <fstream> // library de manehjo de flujo de archivos


using namespace std;


int main() {
string nom, dir, dni;
// Grabar datos en un archivo TXT
ofstream Grabacion;

Grabacion.open("d:\\pruebas\\nuevo.txt", ios::out);

Grabacion<<"Gustavo Arredondo"<<endl;
Grabacion<<"Jr. Cusco 1233 Lima"<<endl;
Grabacion<<"54546377"<<endl;

Grabacion<<"Jose Fernandez"<<endl;
Grabacion<<"Jr. Junin 1633 Lima"<<endl;
Grabacion<<"33224477"<<endl;

Grabacion.close(); 
// Leer datos del archivo y mostrar en pantalla

ifstream Leer("d:\\pruebas\\nuevo.txt", ios::in);

getline(Leer, nom);
while(!Leer.eof()){
	getline(Leer, dir);
	getline(Leer, dni);
	cout<<"Nombre........ "<<nom<<endl;
	cout<<"Direcion...... "<<dir<<endl;
	cout<<"DNI........... "<<dni<<endl;
	getline(Leer, nom);
}
Leer.close();

return 0;	
}