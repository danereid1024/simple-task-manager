import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { TodoService } from '../todo.service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ListComponent } from './list.component';

class MockTodoService {
  deleteTodo = jasmine.createSpy('deleteTodo');
  updateTodo = jasmine.createSpy('updateTodo');
}

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;
  let todoService: MockTodoService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListComponent ],
      imports: [IonicModule.forRoot(), FormsModule],
      providers: [{provide: TodoService, useClass: MockTodoService}],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();

    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    todoService = TestBed.inject(TodoService) as unknown as MockTodoService;
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('delete', () => {
    it('should call delete function from TodoService', () => {
      const id = 1;
      component.delete(id);
      expect(todoService.deleteTodo).toHaveBeenCalledWith(id)

    })
  })

  describe('edit', () => {
    it('should set editMode to true', () => {
      const id = 1;
      component.edit(id);
      component.editMode[id];
      expect(component.editMode[id]).toBeTruthy();
    })
  })

  describe('save', () => {
    it('should call updateTodo and set editMode to false when text is not empty', () => {
      const id = 1;
      component.editText[id] = 'Updated text';
      component.save(id); //this should be adter declaring variables
      expect(todoService.updateTodo).toHaveBeenCalledWith(id, 'Updated text');
      expect(component.editMode[id]).toBe(false);
    })

    it('should call updateTodo and not change editMode if empty', () => {
      const id = 1;
      component.editText[id] = '   ';
      component.save(id);
      expect(todoService.updateTodo).not.toHaveBeenCalled();
      expect(component.editMode[id]).toBe(undefined);
    })
  })

  describe('cancelEdit', () => {
    it('should set editMode to false', () => {
      const id = 1;
      component.cancelEdit(id);
      expect(component.editMode[id]).toBeFalsy();
    })
  })


});
