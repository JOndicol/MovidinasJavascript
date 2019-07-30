import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MiPrimerComponenteComponent } from './mi-primer-componente/mi-primer-componente.component';
import { OtroComponenteComponent } from './otro-componente/otro-componente.component';
import { UltimoComponenteComponent } from './ultimo-componente/ultimo-componente.component';
import { CmpDataBindingComponent } from './cmp-data-binding/cmp-data-binding.component';
import { ContadorComponent } from './cmp-data-binding/contador/contador.component';
import { ComunicacionEntreCmpsComponent } from './comunicacion-entre-cmps/comunicacion-entre-cmps.component';
import { CmpLukeComponent } from './comunicacion-entre-cmps/cmp-luke/cmp-luke.component';
import { CmpLeiaComponent } from './comunicacion-entre-cmps/cmp-leia/cmp-leia.component';
import { CmpCurriculumMainComponent } from './cmp-curriculum-main/cmp-curriculum-main.component';
import { CmpFormCvComponent } from './cmp-curriculum-main/cmp-form-cv/cmp-form-cv.component';
import { CmpPreviewCvComponent } from './cmp-curriculum-main/cmp-preview-cv/cmp-preview-cv.component';
import { CmpPipesComponent } from './cmp-pipes/cmp-pipes.component';
import { DobletePipe } from './cmp-pipes/doblete.pipe';
import { CurrencyRightPipe } from './cmp-pipes/currency-right.pipe';
import { HideWordsPipe } from './cmp-pipes/hide-words.pipe';
import { ReversePipe } from './cmp-pipes/reverse.pipe';
import { FiltroPipe } from './cmp-pipes/filtro.pipe';
import { CmpDirectivasComponent } from './cmp-directivas/cmp-directivas.component';
import { MarcadaDirective } from './cmp-directivas/marcada.directive';
import { BlinkDirective } from './cmp-directivas/blink.directive';
import { CmpServiciosComponent } from './cmp-servicios/cmp-servicios.component';
import { CmpAComponent } from './cmp-servicios/cmp-a/cmp-a.component';
import { CmpBComponent } from './cmp-servicios/cmp-b/cmp-b.component';
import { GeneradoMemesComponent } from './generado-memes/generado-memes.component';
import { FormularioMemesComponent } from './generado-memes/formulario-memes/formulario-memes.component';
import { CmpMemeComponent } from './generado-memes/cmp-meme/cmp-meme.component';
import { CmpFormulariosComponent } from './cmp-formularios/cmp-formularios.component';
import { CmpRoutingComponent } from './cmp-routing/cmp-routing.component';
import { InicioComponent } from './cmp-routing/inicio/inicio.component';
import { NuevoUsuarioComponent } from './cmp-routing/nuevo-usuario/nuevo-usuario.component';
import { UsuariosComponent } from './cmp-routing/usuarios/usuarios.component';
import { InfoUsuarioComponent } from './cmp-routing/usuarios/info-usuario/info-usuario.component';
import { EditarUsuarioComponent } from './cmp-routing/usuarios/editar-usuario/editar-usuario.component';
import { ErrorComponent } from './cmp-routing/error/error.component';
import { Routing } from './cmp-routing/app.routes';

@NgModule({
  declarations: [
    AppComponent,
    MiPrimerComponenteComponent,
    OtroComponenteComponent,
    UltimoComponenteComponent,
    CmpDataBindingComponent,
    ContadorComponent,
    ComunicacionEntreCmpsComponent,
    CmpLukeComponent,
    CmpLeiaComponent,
    CmpCurriculumMainComponent,
    CmpFormCvComponent,
    CmpPreviewCvComponent,
    CmpPipesComponent,
    DobletePipe,
    CurrencyRightPipe,
    HideWordsPipe,
    ReversePipe,
    FiltroPipe,
    CmpDirectivasComponent,
    MarcadaDirective,
    BlinkDirective,
    CmpServiciosComponent,
    CmpAComponent,
    CmpBComponent,
    GeneradoMemesComponent,
    FormularioMemesComponent,
    CmpMemeComponent,
    CmpFormulariosComponent,
    CmpRoutingComponent,
    InicioComponent,
    NuevoUsuarioComponent,
    UsuariosComponent,
    InfoUsuarioComponent,
    EditarUsuarioComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    Routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
