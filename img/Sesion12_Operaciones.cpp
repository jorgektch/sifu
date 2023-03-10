#include <iostream>
#include <fstream> // library de manejo de flujo de archivos
#include <sstream>
#include <windows.h>

using namespace std;
string nom, dir, dni, xsueldo;
float sueldo;

//***********************************************
//   LEER REGISTROS
//***********************************************
void Lee(ifstream &lee){
	system("CLS");
	getline(lee,nom);
	while(!lee.eof()){
		getline(lee,dir);
		getline(lee,dni);
		getline(lee,xsueldo);	
		cout<<"Nombre ----------------> "<<nom<<endl;
		cout<<"Direccion--------------> "<<dir<<endl;
		cout<<"DNI -------------------> "<<dni<<endl;
		cout<<"Sueldo -------------------> "<<xsueldo<<endl;
		istringstream(xsueldo)>>sueldo;
		cout<<"=========================================="<<endl;
	
		getline(lee,nom);
	
	}
}

void Adicionar( ofstream &Grab){
	char opcion=' ';
	do{
		fflush(stdin);
	cout<<"\nNombre........ ";
	getline(cin,nom);
	cout<<"\nDirecion...... ";
	getline(cin,dir);
	cout<<"\nDNI........... ";
	getline(cin,dni);
	cout<<"\nSueldo........ ";
	cin>>sueldo;
	cout<<endl;
	
	Grab<<nom<<endl;
	Grab<<dir<<endl;
	Grab<<dni<<endl;
	Grab<<sueldo<<endl;
		
	 cout<<"Desea Continuar (S)i (N)o... ";cin>>opcion;
	}while(opcion =='s'|| opcion =='S');
	
}


void menu(){
	system("CLS");
	cout<<"\n\tMANEJO DE ARCHIVOS"<<endl;
	cout<<"\n1.-Adicion de Registros";
	cout<<"\n2.-Lectura de Registros	";
	cout<<"\n3.-Buscar  Registros	";
	cout<<"\n4.-Modificar Registro	";
	cout<<"\n5.-Eliminar Registro	";
	cout<<"\n0.-Salir	";
	cout<<"\n\tIngresar Opcion --->	";
}
int main() {
	char opc=' ';
	do{
		menu();
		cin>>opc;
		switch(opc){
			case '0':{
				break;
			}
			case '1':{
				// Grabar datos en un archivo TXT
			ofstream Grabacion("d:\\pruebas\\nuevo.txt", ios::out);
			if(Grabacion.fail()){
				cout<<"Error en el archivo..."<<endl;
				Sleep(2000);
				exit(1);
			}
			Adicionar(Grabacion);
			Grabacion.close();
			break;
			}
			case '2':{
				
				ifstream Leer("d:\\pruebas\\nuevo.txt",ios::in);
				if(Leer.fail()){
					cout<<"Error en el archivo.. "<<endl;
					Sleep(2000);
					exit(1);
				}
				Lee(Leer);
				Leer.close();
				break;
			}
		}
	
	system("pause");
		
	}while(opc != '0');
	

return 0;	
}