#include <iostream>
#include <fstream> // library de manejo de flujo de archivos
#include <sstream>
#include <windows.h>

using namespace std;
string nom, dir, dni, xsueldo, clave;
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
void Eliminar(ifstream &lee, ofstream &reempl){
	string clave;
	system("CLS");
	fflush(stdin);
	cout<<"Ingresar en nr DNI a buscar ---->";
	getline(cin, clave); // Lee desde consola

	getline(lee, nom);
	while(!lee.eof() ){
	getline(lee, dir);
	getline(lee, dni);
	getline(lee, xsueldo);
	if(dni == clave){
		cout<<"\nELIMINADO CORRECTAMENTE... "<<nom<<endl;
		Sleep(1000);	
	
	}else{
		reempl<<nom<<endl;
		reempl<<dir<<endl;
		reempl<<dni<<endl;
		reempl<<xsueldo<<endl;
		
	}
	
		getline(lee, nom);
	
	}
	cout<<endl;
	system("pause");

}

void Modificar(ifstream &lee, ofstream &reempl){
	string clave, newName;
	system("CLS");
	fflush(stdin);
	cout<<"Ingresar en nr DNI a buscar ---->";
	getline(cin, clave); // Lee desde consola
	// proceso de busqueda
	getline(lee, nom);
	
	while(!lee.eof() ){
	getline(lee, dir);
	getline(lee, dni);
	getline(lee, xsueldo);
	
	if(dni == clave){
		
		cout<<"\nNombre....................."<<nom<<endl;
		cout<<"\nIngreser el Nombre nuevo...............";
		getline(cin, newName);
		
		reempl<<newName<<endl;
		reempl<<dir<<endl;
		reempl<<dni<<endl;
		reempl<<xsueldo<<endl;
	} else{
		reempl<<nom<<endl;
		reempl<<dir<<endl;
		reempl<<dni<<endl;
		reempl<<xsueldo<<endl;
	}
	getline(lee, nom);	
}
	cout<<endl;
	system("pause");
}


void Buscar(ifstream &lee){
system("cls");
string clave;
bool find=false;
fflush(stdin);

cout<<"Ingresar en nr DNI a buscar ---->";
getline(cin, clave); // Lee desde consola
getline(lee, nom);
while(!lee.eof() && !find){
	getline(lee, dir);
	getline(lee, dni);
	getline(lee, xsueldo);
	
	if(dni == clave){
		
		cout<<"Nombre....................."<<nom<<endl;
		cout<<"Direccion.................."<<dir<<endl;
		cout<<"DNI........................"<<dni<<endl;
		cout<<"Sueldo.................."<<xsueldo<<endl;
		find = true;
	}
	getline(lee, nom);	
}

if(!find){
	
	cout<<"Registro no existe en el archivo  "<<endl;
	Sleep(2000); 
	
}
system("pause");
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
			case '3':{
				ifstream Leer("d:\\pruebas\\nuevo.txt",ios::in);
				if(Leer.fail()){
					cout<<"Error en el archivo.. "<<endl;
					Sleep(2000);
					exit(1);
				}
				Buscar(Leer);
				Leer.close();
				break;
			}
			
			case '4':{
				
				ifstream Leer("d:\\pruebas\\nuevo.txt",ios::in);
				ofstream Reempl("d:\\pruebas\\destino.txt",ios::out);
				Modificar(Leer, Reempl);
				Leer.close();
				Reempl.close();
				remove("d:\\pruebas\\nuevo.txt");
				rename("d:\\pruebas\\destino.txt", "d:\\pruebas\\nuevo.txt");
				
				break;
			}
			case '5':{
				
				ifstream Leer("d:\\pruebas\\nuevo.txt",ios::in);
				ofstream Reempl("d:\\pruebas\\destino.txt",ios::out);
				Eliminar(Leer, Reempl);
				Leer.close();
				Reempl.close();
				remove("d:\\pruebas\\nuevo.txt");
				rename("d:\\pruebas\\destino.txt", "d:\\pruebas\\nuevo.txt");
				
				break;
			}
			
			
		}
	
	system("pause");
		
	}while(opc != '0');
	

return 0;	
}